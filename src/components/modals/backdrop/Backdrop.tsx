const Backdrop: React.FC<{ hiding: () => void }> = (props) => (
  <div
    className="fixed top-0 left-0 w-full h-screen z-[5007] bg-shadow bg-[#0000004D] backdrop-blur-md"
    onClick={props.hiding}
  />
);

export default Backdrop;
