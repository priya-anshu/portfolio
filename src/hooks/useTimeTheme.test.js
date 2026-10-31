import { getTimeTheme } from "./useTimeTheme";

describe("getTimeTheme", () => {
  it("selects the calendar themes on their dates", () => {
    expect(getTimeTheme(new Date(2026, 9, 31, 12))).toBe("halloween");
    expect(getTimeTheme(new Date(2026, 11, 25, 12))).toBe("christmas");
    expect(getTimeTheme(new Date(2026, 11, 31, 12))).toBe("new-years");
    expect(getTimeTheme(new Date(2027, 0, 1, 12))).toBe("new-years");
    expect(getTimeTheme(new Date(2026, 3, 22, 12))).toBe("earth-day");
    expect(getTimeTheme(new Date(2026, 1, 14, 12))).toBe("valentines");
  });

  it("uses local daytime hours for the standard themes", () => {
    expect(getTimeTheme(new Date(2026, 5, 1, 7))).toBe("day-mode");
    expect(getTimeTheme(new Date(2026, 5, 1, 18, 59))).toBe("day-mode");
    expect(getTimeTheme(new Date(2026, 5, 1, 19))).toBe("night-mode");
  });
});
