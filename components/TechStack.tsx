import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAdobexd,
  SiBlender,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiLaravel,
  SiGit,
  SiMysql,
  SiDocker,
  SiFirebase,
  SiAndroid,
  SiUnity,
  SiCsharp,
  SiFlutter,
  SiKotlin,
} from 'react-icons/si'
import { FaTerminal } from 'react-icons/fa'
import type { IconType } from 'react-icons'

interface Tool {
  icon: IconType
  name: string
}

interface Group {
  label: string
  tools: Tool[]
}

const groups: Group[] = [
  {
    label: 'Design',
    tools: [
      { icon: SiAdobephotoshop, name: 'Photoshop' },
      { icon: SiAdobeillustrator, name: 'Illustrator' },
      { icon: SiAdobeindesign, name: 'InDesign' },
      { icon: SiAdobepremierepro, name: 'Premiere Pro' },
      { icon: SiAdobeaftereffects, name: 'After Effects' },
      { icon: SiBlender, name: 'Blender' },
    ],
  },
  {
    label: 'UX / UI',
    tools: [
      { icon: SiFigma, name: 'Figma' },
      { icon: SiAdobexd, name: 'Adobe XD' },
    ],
  },
  {
    label: 'Web Development',
    tools: [
      { icon: SiHtml5, name: 'HTML5' },
      { icon: SiJavascript, name: 'JavaScript' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiReact, name: 'React' },
      { icon: SiNextdotjs, name: 'Next.js' },
    ],
  },
  {
    label: 'App & Game Development',
    tools: [
      { icon: SiReact, name: 'React Native' },
      { icon: SiAndroid, name: 'Android' },
      { icon: SiFlutter, name: 'Flutter' },
      { icon: SiKotlin, name: 'Kotlin' },
      { icon: SiUnity, name: 'Unity' },
      { icon: SiCsharp, name: 'C#' },
    ],
  },
  {
    label: 'Backend',
    tools: [
      { icon: SiNodedotjs, name: 'Node.js' },
      { icon: SiExpress, name: 'Express' },
      { icon: SiPhp, name: 'PHP' },
      { icon: SiLaravel, name: 'Laravel' },
    ],
  },
  {
    label: 'Tools & Databases',
    tools: [
      { icon: SiGit, name: 'Git' },
      { icon: FaTerminal, name: 'Bash' },
      { icon: SiMysql, name: 'MySQL' },
      { icon: SiDocker, name: 'Docker' },
      { icon: SiFirebase, name: 'Firebase' },
    ],
  },
]

export default function TechStack() {
  return (
    <div className="space-y-10">
      {groups.map(({ label, tools }) => (
        <div key={label}>
          <h3 className="text-muted text-xs font-semibold uppercase tracking-widest mb-4">
            {label}
          </h3>
          <div className="flex flex-wrap gap-3">
            {tools.map(({ icon: Icon, name }) => (
              <div
                key={name}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface text-muted text-sm hover:border-accent hover:text-accent transition-colors duration-200 cursor-default"
              >
                <Icon size={16} />
                <span className="font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
