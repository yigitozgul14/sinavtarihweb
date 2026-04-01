/**
 * Chaikin's corner-cutting algorithm for polygon smoothing.
 *
 * Each iteration replaces every edge with two new points at the
 * 25% and 75% positions, producing progressively rounder shapes.
 * Works on closed polygons — wraps around the last→first edge.
 *
 * 3 iterations: 8 vertices → ~64 vertices (visually smooth)
 */
export function chaikinSmooth(
  coords: [number, number][],
  iterations = 3
): [number, number][] {
  // Strip the explicit closing point if present (we handle closure internally)
  let pts = [...coords];
  if (pts.length > 1) {
    const [fx, fy] = pts[0];
    const [lx, ly] = pts[pts.length - 1];
    if (fx === lx && fy === ly) pts = pts.slice(0, -1);
  }

  for (let it = 0; it < iterations; it++) {
    const next: [number, number][] = [];
    for (let i = 0; i < pts.length; i++) {
      const [x0, y0] = pts[i];
      const [x1, y1] = pts[(i + 1) % pts.length]; // wrap → closed polygon
      next.push([0.75 * x0 + 0.25 * x1, 0.75 * y0 + 0.25 * y1]);
      next.push([0.25 * x0 + 0.75 * x1, 0.25 * y0 + 0.75 * y1]);
    }
    pts = next;
  }

  return pts;
}
