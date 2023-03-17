import React, { useState } from 'react';
import {
  Box
} from '@chakra-ui/react';
const ReadMore = ({text}) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {setIsReadMore(!isReadMore)};
   
    let style={
        color: "blue",
        cursor: "pointer",
        hover: {
            textDecoration : "underline",
            cursor: "pointer",
            color: "blue",
        }
    }
    

  return (
    <p className='testimonials__quote__text' >
      {isReadMore ? text.slice(0, 150): text }
      {text.length > 150 &&
        <Box as={"span"} style={style} _hover={{
                  textDecoration : "underline",
                  color: "blue",
                  cursor: "pointer",
                }}  onClick={toggleReadMore}>
        {isReadMore ?   '...more'  : '...less'}
        
        </Box>
      }
    </p>
  )
}

export default ReadMore;