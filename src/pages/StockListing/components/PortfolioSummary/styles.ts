import {StyleSheet} from 'react-native';
import {Colors, FontSize, Spacing} from '../../../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.cardBg,
    padding: Spacing.pageSpacing,
    paddingTop: Spacing.small,
  },
  innerContainer: {
    paddingBottom: Spacing.pageSpacing,
  },
  labelValueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  angleIndicator: {
    fontSize: FontSize.headingLarge,
    color: Colors.primary,
    textAlign: 'center',
  },
  labelText: {
    fontSize: FontSize.heading,
    fontWeight: '700',
  },
  valueText: {
    fontSize: FontSize.regular,
    fontWeight: '500',
  },
});

export default styles;
