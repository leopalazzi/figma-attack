import { createRoot } from 'react-dom/client';
import './i18n';
import CtxApp from './CtxApp';

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('react-page');
  const root = createRoot(container);
  parent.postMessage({ pluginMessage: { type: 'check-onboarding'} }, '*');

  root.render(
    <>
    <CtxApp/>
    </>
  );
});
