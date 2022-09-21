import React, { FC, useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import RuleChip from 'components/RuleChip';

import { ExpressionItemType, RuleType } from 'typings';

import infoSvg from 'assets/img/info-grey.svg';
import unionSvg from 'assets/img/union.svg';
import searchSvg from 'assets/img/search.svg';
import dotSvg from 'assets/img/rec-dot.svg';

import demodata from 'assets/demo/demodata.json';

import styles from 'assets/jss/ruleBuilderModalStyles';

const useStyles = makeStyles(styles);

interface Props {
  setRuleName: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  expression?: ExpressionItemType;
  selectedRules: RuleType[];
  handleAddRule: (rule: RuleType) => void;
  handleRemoveRule: (rule: RuleType) => void;
}

const DefileRuleSetContent: FC<Props> = (props) => {

  const classes = useStyles();

  const { setRuleName, expression, selectedRules, handleAddRule, handleRemoveRule } = props;

  const [menuData, setMenuData] = useState<Array<RuleType>>([]);
  const [open, setOpen] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setMenuData(demodata.filter((cell) => cell.title.toLocaleLowerCase().includes(e.target.value) || cell.type === expression?.title));
  }

  useEffect(() => {
    setMenuData(demodata);
  }, [])

  return (
    <Box sx={{ padding: '0 15px' }}>
      <Box className={classes.ruleTitleField}>
        <OutlinedInput
          endAdornment={<InputAdornment position="end"><img src={infoSvg} alt="" width={12} /></InputAdornment>}
          startAdornment={<InputAdornment position="start"><img src={unionSvg} alt="" width={25} /></InputAdornment>}
          aria-describedby="outlined-weight-helper-text"
          placeholder='Untitled Union Rule'
          onChange={setRuleName}
        />
      </Box>

      <Box className={classes.searchBox}>

        <Box className={classes.searchField}>
          <Box display='flex' justifyContent='space-between' flexWrap='wrap'>
            {
              selectedRules.map((cell) => (
                <Box className={classes.chipCell} key={cell.ruleId}>
                  <RuleChip rule={cell} handleRemove={() => handleRemoveRule(cell)} />
                </Box>
              ))
            }
          </Box>
          <ClickAwayListener onClickAway={() => setOpen(false)}>
            <Box>
              <OutlinedInput
                startAdornment={<InputAdornment position="start"><img src={searchSvg} alt="" width={18.22} /></InputAdornment>}
                placeholder='Search for an existing Rule or insert Rule ID'
                fullWidth
                onChange={handleSearch}
                onClick={() => setOpen(true)}
              />
              {
                open && menuData.length > 0 && (
                  <MenuList className={clsx('search-dropdown', classes.dropdown)}>
                    {
                      menuData.map((cell) => (
                        <MenuItem key={cell.ruleId} onClick={(e) => {
                          e.preventDefault();
                          handleAddRule(cell)
                        }}>
                          <Box width={18} height={18} display='flex' alignItems='center' justifyContent='center' mr={1}>
                            <img src={dotSvg} alt="" width={10} />
                          </Box>
                          {cell.title}
                          <img src={infoSvg} alt="" width={12} />
                        </MenuItem>
                      ))
                    }
                  </MenuList>
                )
              }
            </Box>
          </ClickAwayListener>
        </Box>
      </Box>
    </Box>
  );
}

export default DefileRuleSetContent;
