
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
            Title:"Sanam Teri Kasam",
            Actor:"Harshwardhan Rane, Mawra Hocane",
            Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4D8UWu2KqJq68FXYL4cqK7awD0NeTjt4uEQ&s"
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
          Title:"Crook",
          Actor:"Imraan Hashmi, Neha Sharma",
          Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT3GoxUts717atSG5vCoTDHarPN1MejvtrhQ&s"
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
          Title:"RHTDM",
          Actor:"R. Madhvan, Diya Sharma, Saif Ali Khan",
          Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmY2Cme5W1lGfZYl9r5rzgKThvy-EYfWphqQ&s"     
        },

        {
          Title:"Ramaiya Vastavaiya",
          Actor:"Aamir Khan , Anushka Sharma, Sushant Singh Rajput",
          Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-y_QzJ8zvPk-AsXEb5B4WD6EeHmHtY3F6nA&s"     
        },

        {
          Title:"Pushpa",
          Actor:"Allu Arjun , Rashmika Mandana",
          Image:"https://lehren.com/wp-content/uploads/2022/01/Pushpa-The-Rise-Storyline-Ending-What-To-Expect-In-Part-2.jpg"     
        },
        
        {
          Title:"Yeh Jawaani Hai Deewani",
          Actor:"Ranbir Kapoor, Dipika Padukone, Klaki Koechlin, Aditya Roy Kapoor",
          Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUH8igGfHcpG_ulsTNjXiM3okZKPIONegWyw&s"
        },

        {
          Title:"1920",
          Actor:"Adah Sharma, Rajneesh Duggal",
          Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1IfEERfiR1skddVIAXML9hOzS7nl0cdzslg&s"
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
         <Link to={`/movies/${val.Title}`}>
          <img width="200"height="140" src={val.Image}/>
          </Link>
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