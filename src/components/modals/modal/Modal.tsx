import Backdrop from "../backdrop/Backdrop";

const Modal = ({
  hiding,
  children,
  className,
}: {
  hiding: () => void;
  children: React.ReactNode;
  className?: string;
}) => (
  <div className="w-screen h-screen fixed top-12 z-50">
    <Backdrop hiding={hiding} />
    <div
      className={`absolute h-[75vh]  overflow-y-auto w-fit z-[6000] top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 p-12  rounded-lg  bg-black  ${className}`}
    >
      {children}
    </div>
  </div>
);

export default Modal;
