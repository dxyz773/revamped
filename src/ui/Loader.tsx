import { ThreeDots } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="self-center h-64 justify-center pt-20">
      <ThreeDots
        visible={true}
        height="40"
        width="40"
        color="#ff6f61]"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
