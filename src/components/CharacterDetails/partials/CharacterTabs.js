import PropTypes from 'prop-types';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Box } from '@mui/system';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Grid, Tab, Typography } from '@mui/material';
import { cardStyles } from '../../../theme/components';
import getAge from '../../../helpers/getAge';

function CharacterTabLine({ title, data }) {
  return (
    <div>
      <Typography variant="subtitle2">
        {`${title}: `}
        <Typography variant="subtitle1">{data}</Typography>
      </Typography>
    </div>
  );
}

function CharacterTabs({ character }) {
  const { itemsDetail } = cardStyles();
  const [t] = useTranslation('global');
  const [value, setValue] = useState('1');

  const handleChange = (e, newValue) => {
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
            <Tab
              label={t('character.firstTag')}
              value="1"
              sx={{ flexGrow: '1' }}
              data-test-id="tab-toggle"
            />
            <Tab
              label={t('character.secondTag')}
              value="2"
              sx={{ flexGrow: '1' }}
            />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ height: '100%' }}>
          <Box className={itemsDetail}>
            <CharacterTabLine
              title={t('character.features.nickname')}
              data={character.nickname}
            />
            <CharacterTabLine
              title={t('character.features.birthday')}
              data={
                character.birthday === 'Unknown'
                  ? character.birthday
                  : getAge(character.birthday)
              }
            />
            <CharacterTabLine
              title={t('character.features.occupation')}
              data={character.occupation.join(', ')}
            />
            <CharacterTabLine
              title={t('character.features.status')}
              data={character.status}
            />
          </Box>
        </TabPanel>
        <TabPanel value="2" sx={{ height: '100%' }}>
          <div className={itemsDetail}>
            <CharacterTabLine
              title={t('character.features.portrayed')}
              data={character.portrayed}
            />
            <Grid
              container
              spacing={2}
              columns={16}
              textAlign="center"
              margin={0}
            >
              {character.appearance.length > 0 && (
                <Grid
                  item
                  xs={character.category.indexOf(',') > -1 ? '8' : '16'}
                >
                  <Typography variant="subtitle2">
                    Breaking Bad
                    {` ${t('character.features.episodes')}`}
                  </Typography>
                  {character.appearance.map((episode) => (
                    <Typography variant="subtitle1">{episode}</Typography>
                  ))}
                </Grid>
              )}
              {character.better_call_saul_appearance.length > 0 && (
                <Grid
                  item
                  xs={character.category.indexOf(',') > -1 ? '8' : '16'}
                >
                  <Typography variant="subtitle2">
                    Better Call Saul
                    {` ${t('character.features.episodes')}`}
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
}

CharacterTabs.propTypes = { character: PropTypes.shape.isRequired };

CharacterTabLine.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default CharacterTabs;
