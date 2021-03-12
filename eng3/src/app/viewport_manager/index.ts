type ViewportManagementTerminator = () => void;

const viewportManager = {
  syncViewportToSize(
    gl2 : WebGL2RenderingContext
  ) : ViewportManagementTerminator {
    const resizeObserver = new ResizeObserver(
      (
        entries : ResizeObserverEntry[]
      ) : void => {
        for (const entry of entries) {
          // TODO devicePixelContentBoxSize
          const {
            blockSize,
            inlineSize
          } = entry.contentBoxSize[0];

          const canvas = entry.target as HTMLCanvasElement;

          canvas.height = blockSize;
          canvas.width  = inlineSize;

          gl2.viewport(
            0,
            0,
            inlineSize,
            blockSize
          );
        }
      }
    );

    resizeObserver.observe(
      gl2.canvas as HTMLCanvasElement
    );

    return () : void => {
      resizeObserver.unobserve(
        gl2.canvas as HTMLCanvasElement
      );
    };
  }
};

export default viewportManager;
