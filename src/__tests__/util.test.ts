import {
  convertTimestampToDate,
  timestampToDate,
  convertDateToTimestamp,
  dateToTimestamp,
} from "../util";

describe("Utility Functions", () => {
  describe("convertTimestampToDate", () => {
    test("should convert a valid timestamp to date string", () => {
      const timestamp = `1730042519374`;
      expect(convertTimestampToDate(timestamp)).toBe(
        "2024-10-27T15:21:59.374Z"
      );
    });

    test("should handle empty timestamp", () => {
      expect(convertTimestampToDate()).toBe(new Date().toISOString());
    });
  });

  describe("timestampToDate", () => {
    test("should convert a valid timestamp to date string", () => {
      const timestamp = 1730042519374;
      expect(timestampToDate(timestamp)).toBe("2024-10-27T15:21:59.374Z");
    });

    test("should handle invalid timestamp", () => {
      expect(timestampToDate(NaN)).toBe("Invalid Date");
    });
  });

  describe("convertDateToTimestamp", () => {
    test("should convert a valid date string to timestamp", () => {
      const dateString = "2024-10-27T15:23:00.564Z";
      expect(convertDateToTimestamp(dateString)).toBe(1730042580564);
    });

    test("should handle empty date string", () => {
      expect(convertDateToTimestamp()).toBe(Date.now());
    });
  });

  describe("dateToTimestamp", () => {
    test("should convert a valid date string to timestamp", () => {
      const dateString = "2024-10-27T15:23:00.564Z";
      expect(dateToTimestamp(dateString)).toBe(1730042580564);
    });

    test("should handle invalid date string", () => {
      expect(dateToTimestamp("invalid-date")).toBeNaN(); // Handle invalid date
    });
  });
});
