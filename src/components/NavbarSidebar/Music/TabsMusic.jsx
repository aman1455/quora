import React from 'react'
import CardsMusic from './CardsMusic'
import { Tabs, TabList, TabPanels, Button, TabPanel,useMultiStyleConfig,useTab,Box } from '@chakra-ui/react'
function TabsMusic() {
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
        <Tabs>
          <TabList>
            <CustomTab>One</CustomTab>
            <CustomTab>Two</CustomTab>
          </TabList>
          <TabPanels>
            <TabPanel><CardsMusic/></TabPanel>
            <TabPanel>2</TabPanel>
          </TabPanels>
        </Tabs>
      )
}

export default TabsMusic