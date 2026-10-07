type SupportContactProps = {
  appName: string;
  privacyHref?: string;
};

export const supportEmail = "kateayelet@aftrveil.com";

export function SupportContact({ appName, privacyHref }: SupportContactProps) {
  return (
    <section className="section stack" id="support" aria-label={`${appName} support`}>
      <div className="section-head">
        <h2>Support</h2>
        <p className="kicker">Questions, bugs, or help</p>
      </div>
      <p>
        Email <a href={`mailto:${supportEmail}`}>{supportEmail}</a> about{" "}
        {appName}.
      </p>
      {privacyHref ? (
        <p>
          Privacy policy: <a href={privacyHref}>{privacyHref}</a>
        </p>
      ) : null}
    </section>
  );
}
