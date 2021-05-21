import ViewportManagementTerminator from "../viewport_management_terminator/index.type";

interface ViewportManager {
  syncViewportToSize(
    gl2 : WebGL2RenderingContext
  ) : ViewportManagementTerminator;
}

export default ViewportManager;
