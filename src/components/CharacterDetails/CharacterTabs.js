import { Box } from '@mui/system';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import React, { useState } from 'react';
import { Grid, Tab, Typography } from '@mui/material';
import { getAge } from '../../helpers/getAge';

const CharacterTabLine = ({ title, data }) => {
  return (
    <div>
      <Typography variant="subtitle2">
        {`${title}: `}
        <Typography variant="subtitle1">{data}</Typography>
      </Typography>
    </div>
  );
};

const CharacterTabs = ({ character }) => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        width: '100%',
        typography: 'body1',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{ width: '100%' }}
          >
            <Tab label="Main Information" value="1" className="item-flex" />
            <Tab label="Serie" value="2" className="item-flex" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ height: '100%' }}>
          <div className="items-details-container">
            <CharacterTabLine title="Nickname" data={character.nickname} />
            <CharacterTabLine
              title="Birthday"
              data={
                character.birthday === 'Unknown'
                  ? character.birthday
                  : getAge(character.birthday)
              }
            />
            <CharacterTabLine
              title="Occupation"
              data={character.occupation.join(', ')}
            />
            <CharacterTabLine title="Status" data={character.status} />
          </div>
        </TabPanel>
        <TabPanel value="2" sx={{ height: '100%' }}>
          <div className="items-details-container">
            <CharacterTabLine title="Portrayed by" data={character.portrayed} />
            <Grid
              container
              spacing={2}
              columns={16}
              textAlign={'center'}
              margin={0}
            >
              <Grid
                item
                xs={
                  character.better_call_saul_appearance.length > 0 ? '8' : '16'
                }
              >
                <Typography variant="subtitle2">
                  Breaking Bad Episodes
                </Typography>
                {character.appearance.map((episode) => (
                  <Typography variant="subtitle1">{episode}</Typography>
                ))}
              </Grid>
              {character.better_call_saul_appearance.length > 0 && (
                <Grid
                  item
                  xs={
                    character.better_call_saul_appearance.length > 0
                      ? '8'
                      : '16'
                  }
                >
                  <Typography variant="subtitle2">
                    Better Call Saul Episodes
                  </Typography>
                  {character.better_call_saul_appearance.map((episode) => (
                    <Typography variant="subtitle1">{episode}</Typography>
                  ))}
                </Grid>
              )}
            </Grid>
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default CharacterTabs;
