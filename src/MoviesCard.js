
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';


export default function MultiActionAreaCard() {
    const [movie,setMovie]=React.useState([
        {
           Title:"Chennai Express",
           Actor:"ShahRukh Khan , Deepika Padukon",
           Image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201608/chennai_647_080916060730.jpg?VersionId=fLHghEguzAMw7dYawXuN0lum9N.rjRbN",
        },
       
        {
            Title:"Raksha Bandhan",
            Actor:"Akshay Kumar , Bhumi Pednekar",
            Image:"https://i.timesnowhindi.com/stories/Raksha-Bandhan-Quick-Review.jpg"
        },
       
        {
            Title:"Chup Chup Ke",
            Actor:"Shahid Kapoor , Karina Kapoor ",
            Image:"https://i.ytimg.com/vi/SaEV_DMPogk/mqdefault.jpg"
         },
      
       {
         Title:"Padmaavat",
         Actor:"Shahid Kapoor , Deepika Padukon",
         Image:"https://i.ytimg.com/vi/rWDXHmGJY9A/sddefault.jpg"     
        
        },

        { 
          Title:"Dangal",
          Actor:"Aamir Khan , Fatima Sana Shaikh , Sakshi Tanwar , Sanya Malhotra",
          Image:"https://feminisminindia.com/wp-content/uploads/2016/12/DANGAL-NEW-POSTER.jpg"
        },

        {
          Title:"Chhichhore ",
          Actor:"Sushant Singh Rajput , Shraddha Kapoor",
          Image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9771/1599771-h-2ce23e9cb135"     
        },
        
        {
          Title:"M.S Dhoni",
          Actor:"Sushant Singh Rajput , Kiara Advani",
          Image:"https://assets-in.bmscdn.com/discovery-catalog/events/et00025234-hkxnfqlftf-landscape.jpg"     
        },

        {
          Title:"83",
          Actor:"Ranveer Singh , Deepika Padukon",
          Image:"https://images.sbs.com.au/dims4/default/7a5fab3/2147483647/strip/true/crop/704x396+0+0/resize/1280x720!/quality/90/?url=http%3A%2F%2Fsbs-au-brightspot.s3.amazonaws.com%2Fdrupal%2Fyourlanguage%2Fpublic%2Fpodcast_images%2F83.jpg"     
        },

        {
          Title:"PK",
          Actor:"Aamir Khan , Anushka Sharma",
          Image:"https://www.koimoi.com/wp-content/new-galleries/2020/05/pk-box-office-heres-the-daily-breakdown-of-aamir-khan-anushka-sharmas-satirical-drama-of-2014-0001.jpg"     
        },

        {
          Title:"Pushpa",
          Actor:"Allu Arjun , Rashmika Mandana",
          Image:"https://lehren.com/wp-content/uploads/2022/01/Pushpa-The-Rise-Storyline-Ending-What-To-Expect-In-Part-2.jpg"     
        },
        
        {
          Title:"Bhoot",
          Actor:"Vicky Kaushal , Bhumi Pednekar ",
          Image:"https://akm-img-a-in.tosshub.com/sites/ichowk/story/embed/202002/bhoot_650_020320101611.jpg"
        },

        {
          Title:"Aavesham",
          Actor:" Fahadh Faasil ",
          Image:"https://i.ytimg.com/vi/9TidAXCo7Ss/sddefault.jpg"
        },
    
    ]);
  return(
<>
<Grid container rowSpacing={1} columnSpacing={{xs:1 , sm:2 , md:3}} >
  {movie.map((val,index)=>{
   return<Grid item sx={3} md={3}>
    <Card>
      <CardActionArea>
        {/* <CardMedia
          component="image"
          height="140"
          image="https://m.media-amazon.com/images/M/MV5BMGI2ZDQ2MzgtNjk2Ny00MTU5LWE0ZWQtM2I5NjRlODY5MGM1XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg"
         alt="green iguana"
        /> */}

        <img width="200"height="140" src={val.Image}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {val["Title"]}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {val["Actor"]}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <Link to={`/movies/${val.Title}`} > Click </Link>
        </Button>
      </CardActions>
    </Card>
  </Grid>
  
})}
</Grid>
</>  

  );
}