import { SideBarProvider } from './hooks/useSideBar';
import { ContentProvider } from './hooks/useContent';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBarProvider>
        <SideBar />

        <ContentProvider>
          <Content />
        </ContentProvider>
      </SideBarProvider>
    </div>
  )
}