import React, { useEffect } from 'react';
import { CONTACT, LEGAL } from '../config/site.config';
import ArticleBlock from './ArticleBlock';

const subject = encodeURIComponent('Delete my BlackMusic account');
const bodyText = encodeURIComponent('Please delete my BlackMusic account and the data held for it. I am writing from the email address on the account.');

type Props = { homeHref: string; renderLink: (href: string, children: React.ReactNode, className?: string) => React.ReactNode };

const DeleteAccount: React.FC<Props> = ({ homeHref, renderLink }) => {
  useEffect(() => { document.title = 'Delete your BlackMusic account | BlackBlazent'; }, []);
  return (
    <div className="legal">
      <div className="legal-head">
        <nav className="crumbs" aria-label="Breadcrumb">{renderLink(homeHref, 'BlackMusic')} / <span>Delete your account</span></nav>
        <div className="eyebrow">BlackMusic</div>
        <h1 className="legal-title">Delete your account</h1>
        <p className="legal-intro">You do not need an account to use BlackMusic, and your music never leaves your device. If you created one, this is how to remove it.</p>
      </div>
      <div className="legal-body">
        <ArticleBlock
          section={{
            id: 'steps',
            tag: 'Request',
            title: 'Ask us to delete it',
            banner: 'bm-delete',
            body: [
              `Send an email to ${CONTACT.legal} from the address on your account. Use the subject "Delete my BlackMusic account". We verify the request, delete the account and the data we hold for it within ${LEGAL.responseDays} days, and confirm by reply.`,
              'If you signed in with Google, GitHub, Facebook or Spotify, include the provider name so we can find the right account.',
            ],
            points: [
              { title: 'What we delete', text: 'Your account profile, the library details you synced, and any other data stored with your account.' },
              { title: 'What stays on your devices', text: 'Local libraries, playlists and settings. Uninstall the app or clear its data to remove them. Your music files are never touched.' },
              { title: 'Other services', text: 'Spotify, Last.fm and other services keep their own records. Disconnect BlackMusic from them in their account settings.' },
              { title: 'Faster for sync data', text: 'Inside the app, turn off Music Portable Sync and use the delete button to remove synced data from the server immediately.' },
            ],
          }}
        />
        <p>
          <a className="btn btn-primary" href={`mailto:${CONTACT.legal}?subject=${subject}&body=${bodyText}`}>Email the request</a>
        </p>
      </div>
    </div>
  );
};

export default DeleteAccount;
