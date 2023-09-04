import { IAllProps, Editor as TinyMCEditor } from '@tinymce/tinymce-react'
import { cn } from '~/utils/scripts'

interface IEditorProps extends IAllProps {
  classNameWrapper?: string
  hideError?: boolean
  errorField?: string
}
const Editor = ({ classNameWrapper, errorField, hideError = false, ...props }: IEditorProps) => {
  return (
    <div
      className={cn('relative customs-tinymce', classNameWrapper, {
        isError: Boolean(errorField)
      })}
    >
      <TinyMCEditor {...props} />
      {!hideError && (
        <div className='mt-1 text-red-600 min-h-[1.25rem] text-xs font-semibold max-w-full break-words'>
          {errorField}
        </div>
      )}
    </div>
  )
}
export default Editor
