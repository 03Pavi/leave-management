import React, { useState, ChangeEvent } from 'react';
import { InputBase, alpha, styled } from '@mui/material';
import { InputBaseProps } from '@mui/material/InputBase';
import { Clear as ClearIcon, Search as SearchIcon } from '@mui/icons-material';


interface SearchBarProps extends Omit<InputBaseProps, 'onChange'> {
  /**
   * The delay in milliseconds before triggering the search after user input.
   */
  delay?: number;

  /**
   * Flag to determine whether to display a clear icon.
   */
  withClearIcon?: boolean;

  /**
   * Additional properties for the clear icon.
   */
  clearIconProps?: {
    /**
     * Custom styles for the clear icon.
     */
    sx?: React.CSSProperties;
  };

  /**
   * Additional properties for the search icon.
   */
  searchIconProps?: {
    /**
     * Custom styles for the search icon.
     */
    sx?: React.CSSProperties;
  };

  /**
   * The width of the search bar.
   */
  width?: string;

  /**
   * React node representing an action icon.
   */
  actionIcon?: JSX.Element;

  /**
   * Event handler triggered when the search term changes.
   * @param event - The change event.
   * @param value - The new value of the search input.
   */
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, value: string) => void;
}


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: 'auto',
  display: 'flex',
  alignItems: 'center',
  border: '1px solid #9e9e9e'
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: '0 10px',
  height: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const ClearIconWrapper = styled('div')(({ theme }) => ({
  padding: '0 10px',
  height: '100%',
  position: 'absolute',
  display: 'flex',
  right: 0,
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    fontSize: '14px',
    color: '#757575',
    lineHeight: '20px',
    padding: '8px 8px 8px 0',
    paddingLeft: `calc(1em + 24px)`,
    paddingRight: `calc(1em + 24px)`,
    transition: theme.transitions.create('width'),
    '&:placeholder': {
      color: '#757575'
    }
  }
}));

const SearchBar: React.FC<SearchBarProps> = ({
  delay = 0,
  clearIconProps,
  searchIconProps,
  withClearIcon,
  width,
  actionIcon,
  onChange,
  ...props
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [timeoutId, setTimeoutId] = useState<number | null>(null);
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    if (delay) {
      const newTimeoutId = window.setTimeout(() => {
        if (onChange) {
          onChange(event, value);
        }
      }, delay);
      setTimeoutId(newTimeoutId);
    } else {
      if (onChange) {
        onChange(event, value);
      }
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
  };

  return (
    <Search sx={{ width: width ? width : "100%" }}>
      <SearchIconWrapper>
        <SearchIcon sx={searchIconProps?.sx} />
      </SearchIconWrapper>
      <StyledInputBase
        value={searchTerm}
        onChange={handleInput}
        size="small"
        fullWidth
        {...props}
      />
      <ClearIconWrapper>
        {withClearIcon && searchTerm !== '' && (
          <ClearIcon className="clear-icon" onClick={handleClear} htmlColor="#616161" sx={clearIconProps?.sx} />
        )}
        {
          actionIcon && (searchTerm === '' && actionIcon)
        }
      </ClearIconWrapper>
    </Search>
  );
};

export { SearchBar };
