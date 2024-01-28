import {StyleSheet} from 'react-native';
import {Colors, FontSize, Spacing} from '../../../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.cardBg,
    paddingHorizontal: Spacing.pageSpacing,
    paddingVertical: Spacing.pageSpacing / 2,
  },
  rightRow: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  labelValueRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  symbolText: {
    fontSize: FontSize.regular,
    fontWeight: '700',
  },
  quantityText: {
    fontSize: FontSize.regular,
    marginTop: Spacing.textSpacing,
  },
  labelText: {
    fontSize: FontSize.label,
    fontWeight: '400',
  },
  valueText: {
    fontSize: FontSize.regular,
    fontWeight: '600',
  },
});

export default styles;
