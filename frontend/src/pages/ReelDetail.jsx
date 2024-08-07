import React from "react";
import { useParams } from "react-router-dom";
import reelsData from "./data/reelsData";
import Profile from "../components/Profile";
import Tags from "../components/Tags";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import reelBgVideo from "../assets/reelbgVideo.mp4";

const ReelDetail = () => {
  const { id } = useParams();
  const reel = reelsData[id];
  const moreToExplore = reelsData.filter((_, index) => index !== parseInt(id));
  if (!reel) {
    return <div>Reel not found</div>;
  }

  return (
    <div className="ReelDetail">
      <div className="container mx-auto py-10">
        <div className="reel-player border-2 relative w-full justify-center shadow-2xl rounded-3xl max-h-[130vh] h-full p-5 overflow-hidden bg-cover bg-center bg-no-repeat flex">
          <video
            src={reel.videoUrl}
            controls
            autoPlay
            className="w-[30vw] h-auto rounded-3xl shadow-lg border-2 border-gray-500-500"
          />
         <video
            src={reelBgVideo}
            loop
            muted
            type="video/mp4"
            autoPlay
            className="w-full h-full object-cover absolute left-0 right-0 bottom-0 top-0 -z-10"
          />
          {/* <div className="flex items-center pl-10">
            <img
              className="w-full"
              src="https://media-public.canva.com/dxIfU/MADQDzdxIfU/2/tl.png"
              alt="rabbit"
            />
          </div> */}
        </div>
        {/* <div className="reel-info mt-4">
          <Profile
            profileImage={reel.profileImage}
            profileName={reel.profileName}
            likes={reel.likes}
          />
          <Tags tags={reel.tags} />
        </div> */}
      </div>
      <div className="h-[1vh] w-[80%] mx-auto border-b-2"></div>
      <div className="text-center text-4xl mt-5 font-semibold">
        More to Explore
      </div>
      <div className="container mx-auto p-10 pl-14 ">
        <div className="Card-Container columns-4 gap-2">
          {moreToExplore.map(
            (
              reel,
              index //implicit return using parenthesis, if you are using {} return explicitly, cool
            ) => (
              <Link to={`/reels/${index >= id ? index + 1 : index}`}>
                <div className="mb-10 max-w-[20vw] w-full h-fit border-b-2 rounded-xl break-inside-avoid">
                  <Card thumbnail={reel.thumbnail} />
                  <Profile
                    profileImage={reel.profileImage}
                    profileName={reel.profileName}
                    likes={reel.likes}
                  />
                  <Tags tags={reel.tags} />
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ReelDetail;
