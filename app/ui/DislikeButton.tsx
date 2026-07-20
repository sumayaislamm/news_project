"use client";

const DislikeButton = ({ dislikeSlug }: { dislikeSlug: string }) => {
  return (
    <button
      onClick={() => {
        console.log("dislike button clicked!: ", dislikeSlug);
      }}
      className="text-red-700 bg-amber-300"
    >
      Dislike Click : {dislikeSlug}
    </button>
  );
};

export default DislikeButton;
