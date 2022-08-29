import Avatar from '../components/avatar'
import DateComponent from '../components/date'
// import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ postName, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{postName}</PostTitle>
      <div className="hidden md:block md:mb-12">
        {/* {author && <Avatar name={author.name} picture={author.picture} />} */}
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        {/* <CoverImage title={postName} url={coverImage.url} /> */}
      </div>
      <div className="max-w-2xl mx-auto">
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
