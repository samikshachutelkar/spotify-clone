import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Grid from '@mui/material/Grid';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useParams } from 'react-router-dom';



const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function MovieDetail() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
 
  const {movie_name} = useParams();
  const[currentSong,setCurrentSong]=React.useState();

  const [currentMovie,setCurrentMovie]=React.useState();
  

  React.useEffect(()=>{
    console.log("inside use effect",movie_name);
    
    const current_movie = movie.filter((val, index)=>{
      if(val.Title == movie_name){
        setCurrentMovie(val);
        return val
      }
    })
    console.log("current_movie",current_movie);
  },[])

 const movie=[
  {
    Title:"Chennai Express",
    Actor:"ShahRukh Khan , Deepika Padukon",
    Director:"Rohit Shetty",
    Release_Date:"8 August 2013",
    image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201608/chennai_647_080916060730.jpg?VersionId=fLHghEguzAMw7dYawXuN0lum9N.rjRbN",
    Songs:[
      {name:"One Two Three Four", link:"https://pagalfree.com/musics/128-One%20Two%20Three%20Four%20(Get%20On%20The%20Dance%20Floor)%20-%20Chennai%20Express%20128%20Kbps.mp3", singers:"Vishal Shekhar, Vishal Dadlani, Hamsika Iyer, Sricharan Hasturirangan"},
      {name:"Titli", link:"https://pagalfree.com/musics/128-Titli%20-%20Chennai%20Express%20128%20Kbps.mp3", singers: "Chinmayi, Gopi Sundar"},
      {name:"Tera Rastaa Chhodoon Na", link:"https://pagalfree.com/musics/128-Tera%20Rastaa%20Chhodoon%20Na%20-%20Chennai%20Express%20128%20Kbps.mp3", singers: " Amitabh Bhattacharya, Anusha Mani"},
      {name:"Kashmir Tu Main KanyaKumari", link:"https://pagalfree.com/musics/128-Kashmir%20Main,%20Tu%20Kanyakumari%20-%20Chennai%20Express%20128%20Kbps.mp3",singers: "Vishal Shekhar, Sunidhi Chauhan, Arijit Singh, Neeti Mohan"}
    ]
  },

  {
    Title:"Sanam Teri Kasam",
    Actor:"Harshwardhan Rane , Mawra Hocane",
    Director:" Radhika Rao, Vinay Sapru",
    Release_Date:"5 February 2016",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4D8UWu2KqJq68FXYL4cqK7awD0NeTjt4uEQ&s",
    Songs:[
      {name:"Sanam Teri Kasam",link:"https://pagalfree.com/musics/128-Sanam%20Teri%20Kasam%20-%20Sanam%20Teri%20Kasam%20128%20Kbps.mp3",singers:"Ankit Tiwari, Palak Muchhal"},
      {name:"Kheech Meri Photo",link:"https://pagalfree.com/musics/128-Kheech%20Meri%20Photo%20-%20Sanam%20Teri%20Kasam%20128%20Kbps.mp3",singers:"Neeti Mohan, AKASA, Darshan Raval, Himesh Reshamiya"},
      {name:"Tera Chehra",link:"https://pagalfree.com/musics/128-Tera%20Chehra%20-%20Sanam%20Teri%20Kasam%20128%20Kbps.mp3",singers:"Arijit Singh, Himesh Reshamiya"},
      {name:"Bewajah",link:"https://pagalfree.com/musics/128-Bewajah%20-%20Sanam%20Teri%20Kasam%20128%20Kbps.mp3",singers:"Himesh Reshamiya"},
      {name:"Ek Number",link:"https://pagalfree.com/musics/128-Ek%20Number%20-%20Sanam%20Teri%20Kasam%20128%20Kbps.mp3",singers:"Himesh Reshamiya, Neeti Mohan"}
    ]
  },
  {
    Title:"Chup Chup Ke",
    Actor:"Kareena Kapoor, shahid Kapoor",
    Director:"Priyadarshan",
    Release_Date:"9 JUne 2016",
    image:"https://i.ytimg.com/vi/SaEV_DMPogk/mqdefault.jpg",
    Songs:[
      {name:"dil Vich Lagya",link:"https://pagalfree.com/musics/128-Dil%20Vich%20Lagya%20-%20Chup%20Chup%20Ke%20128%20Kbps.mp3",singers:"Himesh Reshammiya and Nihal Tauro"},
      {name:"Ghoomar",link:"https://pagalfree.com/musics/128-Ghoomar%20-%20Chup%20Chup%20Ke%20128%20Kbps.mp3",singers:"Arijit Singh"},
      {name:"Aaya Re",link:"https://pagalfree.com/musics/128-Aaya%20Re%20-%20Chup%20Chup%20Ke%20128%20Kbps.mp3",singers:"Himesh Reshamiya"},
      {name:"Tumhi Se",link:"https://pagalfree.com/musics/128-Tumhi%20Se%20-%20Chup%20Chup%20Ke%20128%20Kbps.mp3",singers:"Romy"},
      {name:"Mausam Hai Bada Quatil",link:"https://pagalfree.com/musics/128-Mausam%20Hai%20Bada%20Qatil%20-%20Chup%20Chup%20Ke%20128%20Kbps.mp3",singers:"Shreya Ghoshal"}
    ]
  },

  {
    Title:"Padmaavat",
    Actor:"Ranveer Singh, Deepika Padukon, Shahid Kapoor",
    Director:"Sanjay Leela Bhansali",
    Release_Date:"25 January 2018",
    image:"https://i.ytimg.com/vi/rWDXHmGJY9A/sddefault.jpg",
    Songs:[
      {name:"Naino Vale Ne",link:"https://pagalfree.com/musics/128-Nainowale%20Ne%20-%20Padmaavat%20128%20Kbps.mp3",singers:"Neeti Mohan"},
      {name:"Ghoomar",link:"https://pagalfree.com/musics/128-Ghoomar%20-%20Padmaavat%20128%20Kbps.mp3",singers:"Shreya Ghoshal, Swaroop Khan"},
      {name:"Khali Bali",link:"https://pagalfree.com/musics/128-Khalibali%20-%20Padmaavat%20128%20Kbps.mp3",singers:"Shivam Pathak, Shail Hada"},
      {name:"Binte Dil",link:"https://pagalfree.com/musics/128-Binte%20Dil%20-%20Padmaavat%20128%20Kbps.mp3",singers:"Arijit Singh"},
      {name:"Ek Dil Hai Ek Jaan Hai",link:"https://pagalfree.com/musics/128-Ek%20Dil%20Ek%20Jaan%20-%20Padmaavat%20128%20Kbps.mp3",singers:"Shivam Pathak, Muztaba AZIZ NAZA, Kunal Pandit, Farhan Sabri"}
    ]
  },
  {
    Title:"Crook",
    Actor:"Imraan Hashmi, Neha Sharma",
    Director:"Mohit Suri",
    Release_Date:" 8 October 2010 ",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT3GoxUts717atSG5vCoTDHarPN1MejvtrhQ&s",
    Songs:[
      {name:"Mere Bina",link:"https://pagalfree.com/musics/128-Mere%20Bina%20-%20Crook%20128%20Kbps.mp3",singers:"Pritam, Nikhil D'souza"},
      {name:"Tujhko Jo Paya",link:"https://pagalfree.com/musics/128-Tujhko%20Jo%20Paaya%20-%20Crook%20128%20Kbps.mp3",singers:"Pritam, Mohit Chauhan"},
      {name:"Tujh Mein",link:"https://pagalfree.com/musics/128-Tujhi%20Mein%20-%20Crook%20128%20Kbps.mp3",singers:"pritam, KK"},
      {name:"Challa",link:"https://pagalfree.com/musics/128-Challa%20-%20Crook%20128%20Kbps.mp3",singers:"Pritam, Babbu Maan, Suzanne D'Mello"},
      {name:"Kya",link:"https://pagalfree.com/musics/128-Kya%20-%20Crook%20128%20Kbps.mp3",singers:"Pritam, Neeraj Shridha"}
    ]
  },
  {
    Title:"Chhichhore",
    Actor:"Sushant Singh Rajput , Shraddha Kapoor",
    Director:"Nitesh Tiwari",
    Release_Date:"6 September 2019",
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9771/1599771-h-2ce23e9cb135",
    Songs:[
      {name:"Khairiyat",link:"https://pagalfree.com/musics/128-Khairiyat%20-%20Chhichhore%20128%20Kbps.mp3",singers:"Arijit Singh"},
      {name:"Woh Din",link:"https://pagalfree.com/musics/128-Woh%20Din%20-%20Chhichhore%20128%20Kbps.mp3",singers:"Arijit Singh"},
      {name:"Kal Ki Baat Hai",link:"https://pagalfree.com/musics/128-Kal%20Ki%20Hi%20Baat%20Hai%20-%20Chhichhore%20128%20Kbps.mp3",singers:"KK"},
      {name:"Control",link:"https://pagalfree.com/musics/128-Control%20-%20Chhichhore%20128%20Kbps.mp3",singers:"Amitabh Bhattacharya, Nakash Aziz, Geet Sagar, Sreeram Chandra, Manish .J. Tipu"}
    ]
  },
  {
    Title:"M.S Dhoni",
    Actor:"Sushant Singh Rajput , Kiara Advani",
    Director:"Neeraj Pandey",
    Release_Date:"30 September 2016 ",
    image:"https://assets-in.bmscdn.com/discovery-catalog/events/et00025234-hkxnfqlftf-landscape.jpg",
    Songs:[
      {name:"Besabriyaan",link:"https://pagalfree.com/musics/128-Besabriyaan%20-%20M.S.%20Dhoni%20-%20The%20Untold%20Story%20128%20Kbps.mp3",singers:"Armaan Malik"},
      {name:"Jab Tak",link:"https://pagalfree.com/musics/128-Jab%20Tak%20-%20M.S.%20Dhoni%20-%20The%20Untold%20Story%20128%20Kbps.mp3",singers:"Armaan Malik"},
      {name:"Kaun Tujhe",link:"https://pagalfree.com/musics/128-Kaun%20Tujhe%20-%20M.S.%20Dhoni%20-%20The%20Untold%20Story%20128%20Kbps.mp3",singers:"Palak Muchhal"},
      {name:"Phir Kabhi",link:"https://pagalfree.com/musics/128-Phir%20Kabhi%20-%20M.S.%20Dhoni%20-%20The%20Untold%20Story%20128%20Kbps.mp3",singers:"Arijit Singh"},
      {name:"Padhoge Likhoge",link:"https://pagalfree.com/musics/128-Padhoge%20Likhoge%20-%20M.S.%20Dhoni%20-%20The%20Untold%20Story%20128%20Kbps.mp3",singers:"Ananya Nanda"}
    ]
  },
  {
    Title:"RHTDM",
    Actor:"R. Madhvan, Diya Sharma, Saif Ali Khan",
    Director:"Gautham Vasudev Menon",
    Release_Date:"19 October 2001",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmY2Cme5W1lGfZYl9r5rzgKThvy-EYfWphqQ&s",
    Songs:[
      {name:"Kaise Main Kahu Tujhse",link:"V",singers:"KK"},
      {name:"Such Keh Raha Hai Deewana",link:"https://pagalfree.com/musics/128-Such%20Keh%20Raha%20Hai%20-%20Rehnaa%20Hai%20Terre%20Dil%20Mein%20128%20Kbps.mp3",singers:"KK"},
      {name:"zara Zara",link:"https://pagalfree.com/musics/128-Zara%20Zara%20-%20Rehnaa%20Hai%20Terre%20Dil%20Mein%20128%20Kbps.mp3",singers:"Bombay Jayshree"},
      {name:"Dilko Tumse Pyar Hua",link:"https://pagalfree.com/musics/128-Dilko%20Tumse%20Pyar%20Hua%20-%20Rehnaa%20Hai%20Terre%20Dil%20Mein%20128%20Kbps.mp3",singers:"RoopKumar Rathod"},
      {name:"Bolo Bolo",link:"https://pagalfree.com/musics/128-Bolo%20Bolo%20-%20Rehnaa%20Hai%20Terre%20Dil%20Mein%20128%20Kbps.mp3",singers:"Shaan"}
    ]
  },
  {
    Title:"Ramaiya Vastavaiya",
    Actor:"Girish Kumar, Shruti Hasan, Sonu Sood",
    Director:"Prabhu Deva",
    Release_Date:"19 July 2013",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-y_QzJ8zvPk-AsXEb5B4WD6EeHmHtY3F6nA&s",
    Songs:[
      {name:"Peecha Chhute",link:"https://pagalfree.com/musics/128-Peecha%20Chhute%20-%20Ramaiya%20Vastavaiya%20128%20Kbps.mp3",singers:"Mohit Chauhan"},
      {name:"Jadoo Ki Jhappi",link:"https://pagalfree.com/musics/128-Jadoo%20Ki%20Jhappi%20-%20Ramaiya%20Vastavaiya%20128%20Kbps.mp3",singers:"Mikka Singh, Neha Kakkar"},
      {name:"Jeene Laga Hoon",link:"https://pagalfree.com/musics/128-Jeene%20Laga%20Hoon%20-%20Ramaiya%20Vastavaiya%20128%20Kbps.mp3",singers:"Atif Aslam, Shreya Ghoshal"},
      {name:"Bairiyaa",link:"https://pagalfree.com/musics/128-Bairiyaa%20-%20Ramaiya%20Vastavaiya%20128%20Kbps.mp3",singers:"Atif Aslam"},
      {name:"Rang Jo Lagyo",link:"https://pagalfree.com/musics/128-Rang%20Jo%20Lagyo%20-%20Ramaiya%20Vastavaiya%20128%20Kbps.mp3",singers:"Atif Aslam"}
    ]
  },
  {
    Title:"Pushpa",
    Actor:"Allu Arjun , Rashmika Mandana",
    Director:"Sukumar",
    Release_Date:"17 December 2021",
    image:"https://lehren.com/wp-content/uploads/2022/01/Pushpa-The-Rise-Storyline-Ending-What-To-Expect-In-Part-2.jpg",
    Songs:[
      {name:"Jago Jago Bakre",link:"https://pagalfree.com/musics/128-Jaago%20Jaago%20Bakre%20-%20Pushpa%20-%20The%20Rise%20128%20Kbps.mp3",singers:"Vishal Dadlani"},
      {name:"Srivalli",link:"https://pagalfree.com/musics/128-Srivalli%20-%20Pushpa%20-%20The%20Rise%20128%20Kbps.mp3",singers:"Javed Ali"},
      {name:"Eyy Bidda Yeh Mera Adda",link:"https://pagalfree.com/musics/128-Eyy%20Bidda%20Ye%20Mera%20Adda%20-%20Pushpa%20-%20The%20Rise%20128%20Kbps.mp3",singers:"Nakash Aziz"},
      {name:"Oo Bolega Yaa Oo Oo Bolega",link:"https://pagalfree.com/musics/128-Oo%20Bolega%20Ya%20Oo%20Oo%20Bolega%20-%20Pushpa%20-%20The%20Rise%20128%20Kbps.mp3",singers:"Kanika Kapoor"},
      {name:"Saami Saami",link:"https://pagalfree.com/musics/128-Saami%20Saami%20-%20Pushpa%20-%20The%20Rise%20128%20Kbps.mp3",singers:"Sunidhi Chauhan"}
    ]
  },
  {
    Title:"Yeh Jawaani Hai Deewani",
    Actor:"Ranbir Kapoor, Dipika Padukone, Klaki Koechlin, Aditya Roy Kapoor",
    Director:"Ayan Mukerji",
    Release_Date:"31 May 2013",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUH8igGfHcpG_ulsTNjXiM3okZKPIONegWyw&s",
    Songs:[
      {name:"Badtameez Dil",link:"https://pagalfree.com/musics/128-Badtameez%20Dil%20-%20Yeh%20Jawaani%20Hai%20Deewani%20128%20Kbps.mp3",singers:"Benny Dayal, Shefali Alvares"},
      {name:"Balam Pichkari",link:"https://pagalfree.com/musics/128-Balam%20Pichkari%20-%20Yeh%20Jawaani%20Hai%20Deewani%20128%20Kbps.mp3",singers:"Vishal Dadlani, Shalmali Kholgade"},
      {name:"Dilliwaali Girlfriend",link:"https://pagalfree.com/musics/128-Dilliwaali%20Girlfriend%20-%20Yeh%20Jawaani%20Hai%20Deewani%20128%20Kbps.mp3",singers:"Arijit Singh, Sunidhi Chauhan"},
      {name:"Kabira",link:"https://pagalfree.com/musics/128-Kabira%20-%20Yeh%20Jawaani%20Hai%20Deewani%20128%20Kbps.mp3",singers:"Tochi Raina, Rekha Bhardwaj"},
      {name:"Subhanallah",link:"https://pagalfree.com/musics/128-Subhanallah%20-%20Yeh%20Jawaani%20Hai%20Deewani%20128%20Kbps.mp3",singers:"Sreeram Chandra, Shilpa Rao"}
    ]
  },
  {
    Title:"1920",
    Actor:"Adah Sharma, Rajneesh Duggal",
    Director:"Vikram Bhatt",
    Release_Date:"12 September 2008",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1IfEERfiR1skddVIAXML9hOzS7nl0cdzslg&s",
    Songs:[
      {name:"1920 Theme",link:"https://pagalfree.com/musics/128-1920%20Theme%20-%201920%20128%20Kbps.mp3",singers:"Instrumental"},
      {name:"Aise Jalta Hai Jiya",link:"https://pagalfree.com/musics/128-Aise%20Jalta%20Hai%20Jiya%20-%201920%20128%20Kbps.mp3",singers:"Asha Bhosle"},
      {name:"Bichhua",link:"https://pagalfree.com/musics/128-Bichua%20-%201920%20128%20Kbps.mp3",singers:"Subha Mudgal"},
      {name:"Tujhe Main Pyar Karu",link:"https://pagalfree.com/musics/128-Tujhe%20Main%20Pyar%20Karu%20-%201920%20128%20Kbps.mp3",singers:"Kailash Kher"},
      {name:"Vada Tumse Hai Vada",link:"https://pagalfree.com/musics/128-Vaada%20Tumse%20Hain%20Vaada%20-%201920%20128%20Kbps.mp3",singers:"Pandit Jasraj"}
    ]
  },
]
 
  return (

    <Box sx={{ display: 'flex' }}>
       
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap component="div">
            Spotify Clone
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Home', 'Search', 'Liked', 'My PlayList'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Setting', 'FeedBack','Logout'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
     <Main open={open}>
         <DrawerHeader />


      <Grid container spacing={2}>
        <Grid item md={4}>
          <img
            srcSet={currentMovie && currentMovie.image}
            src={currentMovie && currentMovie.image}
            loading="lazy"
            width={300}
          />
        </Grid>
        <Grid item md={4}>
            <Typography gutterBottom variant="h5" component="div">
               {currentMovie && currentMovie.Title}
            </Typography>
            <Typography variant="h6" color="text.secondary">
               {currentMovie && currentMovie.Actor}
            </Typography>
            <Typography variant="h6" color="text.secondary">
               {currentMovie && currentMovie.Director}
            </Typography>
            <Typography variant="h6" color="text.secondary">
               {currentMovie && currentMovie.Release_Date }
            </Typography>
            
        </Grid>
            
      </Grid>

      <Grid container spacing={2}>
        <Grid item>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {
            currentMovie && currentMovie.Songs.map((val,index)=>{
              return <ListItem>
                    <ListItemAvatar>
                      <Avatar onClick={()=>{
                        console.log("clicked",val.link);
                        setCurrentSong(val.link);
                      }}>
                       <PlayCircleIcon />
                    </Avatar>
                    </ListItemAvatar>
                  <ListItemText primary={val.name} secondary={val.singers} />
                </ListItem>
            })
            
          }
        
      
      </List>
        </Grid>
      </Grid>
      
      <AudioPlayer
                autoPlay
                src={currentSong}
                onPlay={e => console.log("onPlay")}
                // other props here
            />

     </Main>
    </Box>
  );
}