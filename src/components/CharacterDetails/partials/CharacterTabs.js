/* eslint-disable camelcase */
import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/system';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { CardContent, Grid, Tab, Typography } from '@mui/material';
import { cardStyles } from '../../../theme/components';
import { CharacterContext } from '../CharacterDetails';
import CharacterTabLine from './CharacterTabLine';
import getAge from '../../../helpers/getAge';

function CharacterTabs() {
  const {
    nickname,
    birthday,
    occupation,
    status,
    portrayed,
    category,
    appearance,
    better_call_saul_appearance,
  } = useContext(CharacterContext);

  const { itemsDetail } = cardStyles();
  const [t] = useTranslation('global');
  const [value, setValue] = useState('1');

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <CardContent sx={{ width: '100%', backgroundColor: '#f0f0f075' }}>
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
              aria-label="tab list"
              sx={{ width: '100%' }}
            >
              <Tab
                label={t('character.firstTag')}
                value="1"
                sx={{ flexGrow: '1' }}
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
                data={nickname}
              />
              <CharacterTabLine
                title={t('character.features.birthday')}
                data={birthday === 'Unknown' ? birthday : getAge(birthday)}
              />
              <CharacterTabLine
                title={t('character.features.occupation')}
                data={occupation.join(', ')}
              />
              <CharacterTabLine
                title={t('character.features.status')}
                data={status}
              />
            </Box>
          </TabPanel>
          <TabPanel value="2" sx={{ height: '100%' }}>
            <div className={itemsDetail}>
              <CharacterTabLine
                title={t('character.features.portrayed')}
                data={portrayed}
              />
              <Grid
                container
                spacing={2}
                columns={16}
                textAlign="center"
                margin={0}
              >
                {appearance.length > 0 && (
                  <Grid item xs={category.indexOf(',') > -1 ? 8 : 16}>
                    <Typography variant="subtitle2">
                      Breaking Bad
                      {` ${t('character.features.episodes')}`}
                    </Typography>
                    {appearance.map((episode) => (
                      <Typography variant="subtitle1">{episode}</Typography>
                    ))}
                  </Grid>
                )}
                {better_call_saul_appearance.length > 0 && (
                  <Grid item xs={category.indexOf(',') > -1 ? 8 : 16}>
                    <Typography variant="subtitle2">
                      Better Call Saul
                      {` ${t('character.features.episodes')}`}
                    </Typography>
                    {better_call_saul_appearance.map((episode) => (
                      <Typography variant="subtitle1">{episode}</Typography>
                    ))}
                  </Grid>
                )}
              </Grid>
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </CardContent>
  );
}
export default CharacterTabs;
