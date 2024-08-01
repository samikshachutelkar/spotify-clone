import { useParams } from "react-router-dom";

export default function MovieDetail () {
  const detail =useParams( {
    Title:"Chennai Express",
    Actor:"ShahRukh Khan , Deepika Padukon",
    Image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201608/chennai_647_080916060730.jpg?VersionId=fLHghEguzAMw7dYawXuN0lum9N.rjRbN"
 });
  
   
    return (
    <>
     {
      detail.MovieActor
  
     }
    </>
  );
}