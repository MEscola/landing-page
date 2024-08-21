import * as S from './styles';
import Logo from '../../elements/Logo';
import Menu from '../Menu';
import Button from '../../atoms/button';

const Header = () => {
  return (<S.Box> 
    <Logo />
    <Menu />
    <Button />

  </S.Box>);
};

export default Header;
