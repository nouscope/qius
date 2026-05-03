// Tweaks panel — let user customize colors and copy live
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "primary": "#8B5CF6",
  "background": "#EFF3F9",
  "headlineStyle": "split",
  "showBlob": true,
  "ctaText": "Quero uma demonstração"
}/*EDITMODE-END*/;

const QiusTweaks = () => {
  const [tweaks, setTweak] = window.useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.documentElement.style.setProperty('--primary', tweaks.primary);
    document.documentElement.style.setProperty('--bg', tweaks.background);
    document.body.style.background = tweaks.background;
  }, [tweaks.primary, tweaks.background]);

  return (
    <window.TweaksPanel title="Tweaks">
      <window.TweakSection title="Cores">
        <window.TweakColor label="Primária" value={tweaks.primary} onChange={v => setTweak('primary', v)} />
        <window.TweakColor label="Background" value={tweaks.background} onChange={v => setTweak('background', v)} />
      </window.TweakSection>
      <window.TweakSection title="Copy">
        <window.TweakText label="CTA principal" value={tweaks.ctaText} onChange={v => setTweak('ctaText', v)} />
      </window.TweakSection>
      <window.TweakSection title="Visual">
        <window.TweakToggle label="Glow no hero" value={tweaks.showBlob} onChange={v => setTweak('showBlob', v)} />
      </window.TweakSection>
    </window.TweaksPanel>
  );
};

window.QiusTweaks = QiusTweaks;
