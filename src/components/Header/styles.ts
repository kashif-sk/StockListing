import {StyleSheet} from 'react-native';
import {Colors, FontSize, Spacing} from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    height: Spacing.header,
    justifyContent: 'center',
    padding: Spacing.pageSpacing,
  },
  pageNameText: {
    color: Colors.lightText,
    fontSize: FontSize.heading,
    fontWeight: '600',
  },
});

export default styles;
