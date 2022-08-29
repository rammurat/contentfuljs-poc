import Avatar from '../components/avatar'
import DateComponent from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ postName, url, date, author }) {
  return (
    <>
      <PostTitle>{postName}</PostTitle>
      
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={postName} url={url} />
      </div>
      <div className="mx-auto">
        <div className="block mb-6">
          {author && <Avatar name={author.name} role={author.role} />}
        </div>
        <div className="mb-6 text-lg">
          <DateComponent dateString={date} />
        </div>
      </div>
    </>
  )
}
