import type { NextPage } from 'next';
import { ComicList } from '../../components/ComicList/ComicList';
import { ApplicationWrapper } from '../../components/layout/ApplicationWrapper';

const Comics: NextPage = () => {
  return (
    <ApplicationWrapper title="Comics Lists">
      <ComicList/>
    </ApplicationWrapper>
  )
}

export default Comics