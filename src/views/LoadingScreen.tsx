import CircleLogo from "../assets/Icons/CircleLogo";

export default function LoadingScreen() {
  return (
    <div
      className="
        flex flex-col items-center justify-center gap-2
        min-h-[60vh]
        bg-[url('/src/assets/Imgs/Pattern/BG_radial.svg')]
        bg-no-repeat bg-center

      "
    >
      <div className="[animation:spin_2.2s_linear_infinite]">
        <CircleLogo height={80} width={80} fill="#6D6174" />
      </div>
      <p className="text-custom-violet-500">Loading ...</p>
    </div>
  );
}
