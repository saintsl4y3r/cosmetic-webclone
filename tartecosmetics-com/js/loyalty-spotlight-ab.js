/**
 * Spotlight AB test utilities (Option B).
 * Pure logic only: bucket from UUID string, decide variant from threshold.
 * No dependency on analytics or config.
 */
(function () {
  'use strict';

  /**
   * Deterministic hash of a string (djb2-style) for even distribution.
   * @param {string} str - Input string (e.g. widgetUuid / subscriber_identifier).
   * @returns {number} Integer 0 to 2^32-1.
   */
  function hashString(str) {
    if (typeof str !== 'string' || str.length === 0) {
      return 0;
    }
    var hash = 5381;
    for (var i = 0; i < str.length; i++) {
      hash = ((hash << 5) + hash) + str.charCodeAt(i);
      hash = hash >>> 0;
    }
    return hash;
  }

  /**
   * Get a stable bucket 1–99 from a UUID string (Option B: same ID as events).
   * Same UUID always returns the same bucket.
   * @param {string} uuid - UUID string (e.g. widgetUuid / subscriber_identifier).
   * @returns {number} Integer 1–99.
   */
  function getBucketFromUuid(uuid) {
    var h = hashString(uuid);
    var bucket = (h % 99) + 1;
    return bucket;
  }

  /**
   * Decide variant A or B from threshold and bucket (widget-ab-test rule).
   * @param {number} thresholdA - Percentage for variant A (0–100). E.g. 50 = 50% see A.
   * @param {number} bucket - User bucket 1–99 from getBucketFromUuid.
   * @returns {'A'|'B'}
   */
  function decideVariant(thresholdA, bucket) {
    var t = Number(thresholdA);
    var b = Number(bucket);
    if (isNaN(t) || isNaN(b)) {
      return 'A';
    }
    if (t >= b) {
      return 'A';
    }
    return 'B';
  }

  /**
   * Get AB variant for this user. Single source of truth for the page.
   * @param {string} uuid - widgetUuid / subscriber_identifier.
   * @param {{ thresholdA?: number, defaultVariant?: 'A'|'B' }} options - If thresholdA missing/off, returns defaultVariant.
   * @returns {'A'|'B'}
   */
  function getAbVariant(uuid, options) {
    var opts = options || {};
    var thresholdA = opts.thresholdA;
    var defaultVariant = opts.defaultVariant || 'A';
    if (thresholdA == null || typeof thresholdA !== 'number' || isNaN(thresholdA)) {
      return defaultVariant;
    }
    var bucket = getBucketFromUuid(uuid);
    return decideVariant(thresholdA, bucket);
  }

  window.__spotlightAb = {
    getBucketFromUuid: getBucketFromUuid,
    decideVariant: decideVariant,
    getAbVariant: getAbVariant
  };
})();
