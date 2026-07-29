import { LikeSvgIcons, PlayIconSvgIcons, UnLikeSvgIcons } from "./AllSvgIcons";

export default function VideoThumbnail({
  img,
  name = "Product video",
  duration = "2:36",
}) {
  return (
    <div>
      <div className="group relative overflow-hidden rounded-tr-2xl rounded-tl-2xl">
        <img
          className="w-85 h-90 rounded-tr-2xl rounded-tl-2xl"
          src={img}
          alt={name}
        />

        <div />
        <span className="absolute bottom-3 left-3 z-20 flex items-center gap-1 rounded-md bg-black/70 px-2 py-1 text-xs font-medium text-white">
          <PlayIconSvgIcons className="h-3 w-3 text-white" />
          {duration}
        </span>
      </div>
      <div className="border h-2 w-60 bg-black/90"></div>

      <div className="flex my-3 items-center gap-4">
        <div className="border border-zinc-400 rounded-lg shadow-xl p-1"><LikeSvgIcons /></div>
        <div className="border border-zinc-400 rounded-lg shadow-xl p-1.5"><UnLikeSvgIcons /></div>
      </div>
    </div>
  );
}
