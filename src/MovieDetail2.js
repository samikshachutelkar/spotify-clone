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
 
  const {movie_name} = useParams;
  const [currentMovie,setCurrentMovie]=React.useState();
  const[currentSong,setCurrentSong]=React.useState();

  React.useEffect(()=>{
    console.log("inside use effect",movie_name);
    
    const current_movie = movie.filter((val, index)=>{
      if(val.name == movie_name){
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
    Songs:[
      {name:"One Two Three Four", link:"https://pagalfree.com/musics/128-One%20Two%20Three%20Four%20(Get%20On%20The%20Dance%20Floor)%20-%20Chennai%20Express%20128%20Kbps.mp3", singers:"Vishal Shekhar, Vishal Dadlani, Hamsika Iyer, Sricharan Hasturirangan"},
      {name:"Titli", link:"https://pagalfree.com/musics/128-Titli%20-%20Chennai%20Express%20128%20Kbps.mp3", singers: "Chinmayi, Gopi Sundar"},
      {name:"Tera Rastaa Chhodoon Na", link:"https://pagalfree.com/musics/128-Tera%20Rastaa%20Chhodoon%20Na%20-%20Chennai%20Express%20128%20Kbps.mp3", singers: " Amitabh Bhattacharya, Anusha Mani"},
      {name:"Kashmir Tu Main KanyaKumari", link:"https://pagalfree.com/musics/128-Kashmir%20Main,%20Tu%20Kanyakumari%20-%20Chennai%20Express%20128%20Kbps.mp3",singers: "Vishal Shekhar, Sunidhi Chauhan, Arijit Singh, Neeti Mohan"}
    ]
  },

  {
    Title:"Raksha Bandhan",
    Actor:"Akshay Kumar , Bhumi Pednekar",
    Director:"Aanand L. Rai",
    Release_Date:"11 August 2022",
    Songs:[
      {name:"Tere Saath Hoon Main",link:"",singers:"Himesh Reshammiya and Nihal Tauro"},
      {name:"Dhaagon Se Baandha",link:"",singers:"Arijit Singh"},
      {name:"Kangan Ruby",link:"",singers:"Himesh Reshamiya"},
      {name:"Bidaai",link:"",singers:"Romy"},
      {name:"Raksha Bandhan",link:"",singers:"Shreya Ghoshal"}
    ]
  }
]
 
  return (

    <Box sx={{ display: 'flex' }}>
        const [obj,setObj]
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
            Spotify
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
        <Grid item sx={6}>
          <img
            srcSet={`https://akm-img-a-in.tosshub.com/indiatoday/images/story/201608/chennai_647_080916060730.jpg?VersionId=fLHghEguzAMw7dYawXuN0lum9N.rjRbN`}
            src={`https://akm-img-a-in.tosshub.com/indiatoday/images/story/201608/chennai_647_080916060730.jpg?VersionId=fLHghEguzAMw7dYawXuN0lum9N.rjRbN`}
            loading="lazy"
            width={300}
          />
           <img
            srcSet={`https://i.timesnowhindi.com/stories/Raksha-Bandhan-Quick-Review.jpg`}
            src={`https://i.timesnowhindi.com/stories/Raksha-Bandhan-Quick-Review.jpg`}
            loading="lazy"
            width={300}
          />
        </Grid>
        <Grid item>
            <Typography gutterBottom variant="h5" component="div">
               {movie.Title}
            </Typography>
            <Typography variant="h6" color="text.secondary">
               {movie.Actor}
            </Typography>
            <Typography variant="h6" color="text.secondary">
               {movie. Director}
            </Typography>
            <Typography variant="h6" color="text.secondary">
               {movie. Release_Date }
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
                      <Avatar on onClick={()=>{
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