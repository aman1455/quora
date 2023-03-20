import React from 'react'
import {
    Tabs,TabList,useTab,TabPanels,TabPanel,useMultiStyleConfig,Button,Box
  } from '@chakra-ui/react';

  import EachCard from '../SidebarOptions/EachCard'
  import ImgComp from './ImgComp';
function MidSectionMusic() {
    const CustomTab = React.forwardRef((props, ref) => {
        // 1. Reuse the `useTab` hook
        const tabProps = useTab({ ...props, ref })
        const isSelected = !!tabProps['aria-selected']
    
        // 2. Hook into the Tabs `size`, `variant`, props
        const styles = useMultiStyleConfig('Tabs', tabProps)
    
        return (
          <Button __css={styles.tab} {...tabProps}>
            <Box as='span' mr='2'>
              {isSelected ? '😎' : '😐'}
            </Box>
            {tabProps.children}
          </Button>
        )
      })
  return (
    <>
 <Tabs>
      <TabList>
        <CustomTab color="rgb(147,149,152)" _selected={{borderBottom: "2px solid red", color: 'red', fontWeight: "bold" }}>Read</CustomTab>
        <CustomTab color="rgb(147,149,152)" _selected={{borderBottom: "2px solid red", color: 'red', fontWeight: "bold"}}>Answer</CustomTab>
        <CustomTab color="rgb(147,149,152)" _selected={{borderBottom: "2px solid red", color: 'red' ,fontWeight: "bold"}}>Most viewed writers</CustomTab>
      </TabList>
      <TabPanels>
        <TabPanel><EachCard/></TabPanel>
        <TabPanel><ImgComp/></TabPanel>
      </TabPanels>
    </Tabs>
    </>

  )
}

export default MidSectionMusic