export default function ThinRule({ dark = false }: { dark?: boolean }) {
  return <hr className={dark ? 'rule-thin-dark' : 'rule-thin'} />;
}
