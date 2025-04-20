import {type PathProps, type SvgProps} from 'react-native-svg'

// import {usePalette} from '#/lib/hooks/usePalette'

// const ratio = 17 / 64

export function Logotype({}: // fill,
// ...rest
{fill?: PathProps['fill']} & SvgProps) {
  // const pal = usePalette('default')
  // @ts-ignore it's fiiiiine
  // const size = parseInt(rest.width || 32)

  return <h1Text style={{margin: 0}}>Boosky</h1Text>
}
