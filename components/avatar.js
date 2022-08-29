import ContentfulImage from './contentful-image'

export default function Avatar({ name, role }) {
  return (
    <div className="flex items-center">
      <div className="text-xl font-bold">{name} {role}</div>
    </div>
  )
}
