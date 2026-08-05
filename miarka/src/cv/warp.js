function warpToA4(inputCanvas, corners, warpedCanvas) {
  const src = cv.imread(inputCanvas);
  const dst = new cv.Mat();

  const srcTri = cv.matFromArray(4, 1, cv.CV_32FC2, [
    corners[0].x, corners[0].y,
    corners[1].x, corners[1].y,
    corners[2].x, corners[2].y,
    corners[3].x, corners[3].y
  ]);

  const w = warpedCanvas.width;
  const h = warpedCanvas.height;

  const dstTri = cv.matFromArray(4, 1, cv.CV_32FC2, [
    0, 0,
    w, 0,
    w, h,
    0, h
  ]);

  const M = cv.getPerspectiveTransform(srcTri, dstTri);
  cv.warpPerspective(src, dst, M, new cv.Size(w, h));

  cv.imshow(warpedCanvas, dst);

  srcTri.delete(); dstTri.delete(); M.delete(); src.delete(); dst.delete();
}
