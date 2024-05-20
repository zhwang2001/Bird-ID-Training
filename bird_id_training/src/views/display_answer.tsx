import {IconButton, Typography} from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

/**
 * Displays the bird's common and scientific name, as well as a button to cycle to the next bird
 * @param birdIdObject
 * @param handleNextBird
 * @constructor
 */
export default function DisplayAnswer({birdIdObject, handleNextBird}){
  return (
      <div style={{display: 'flex', justifyContent: 'column'}}>
          <div style={{marginTop: '5px', display: 'flex', flexDirection: 'column'}}>
              <Typography variant={"h5"} color={"darkgray"}>{birdIdObject.labels}</Typography>
              <Typography color={"grey"}>
                  {birdIdObject["scientific name"][0].toUpperCase() +
                      birdIdObject["scientific name"].slice(1).toLowerCase()}
              </Typography>
          </div>
          <IconButton>
              <KeyboardDoubleArrowRightIcon onClick={handleNextBird} sx={{color: 'grey'}}/>
          </IconButton>
      </div>
  )
}