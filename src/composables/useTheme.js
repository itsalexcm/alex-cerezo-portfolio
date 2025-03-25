import { ref, onMounted } from 'vue';

const lightIcon = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8.0001" cy="7.99998" r="3.42857"/><rect x="6.85718" width="2.28571" height="3.42857" rx="1.14286"/><rect x="6.85718" y="12.5714" width="2.28571" height="3.42857" rx="1.14286"/><rect x="16" y="6.85712" width="2.28571" height="3.42857" rx="1.14286" transform="rotate(90 16 6.85712)"/><rect x="3.42847" y="6.85712" width="2.28571" height="3.42857" rx="1.14286" transform="rotate(90 3.42847 6.85712)"/><rect x="14.4648" y="12.8487" width="2.28571" height="3.42857" rx="1.14286" transform="rotate(135 14.4648 12.8487)"/><rect x="5.57568" y="3.95941" width="2.28571" height="3.42857" rx="1.14286" transform="rotate(135 5.57568 3.95941)"/><rect x="3.15112" y="14.465" width="2.28571" height="3.42857" rx="1.14286" transform="rotate(-135 3.15112 14.465)"/><rect x="12.0408" y="5.57562" width="2.28571" height="3.42857" rx="1.14286" transform="rotate(-135 12.0408 5.57562)"/></svg>';
const darkIcon = '<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 10.2301C14.8638 11.1083 13.4298 11.6322 11.8712 11.6322C8.18328 11.6322 5.19364 8.69895 5.19364 5.08056C5.19364 3.03107 6.15278 1.20137 7.65469 0C3.38329 0.25674 0 3.73692 0 7.9924C0 12.4149 3.65401 16 8.16146 16C11.8773 16 15.0131 13.5636 16 10.2301Z"/></svg>';

export function useTheme() {
  const theme = ref('light');
  const icon = ref(darkIcon);

  const toggleTheme = () => {
    if (!document.body.classList.contains('enable-transitions')) {
      document.body.classList.add('enable-transitions');
    }

    theme.value = theme.value === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme.value);
    icon.value = theme.value === 'dark' ? lightIcon : darkIcon;
    sessionStorage.setItem('theme', theme.value);
  };

  onMounted(() => {
    const savedTheme = sessionStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    theme.value = savedTheme;
    document.documentElement.setAttribute('data-theme', theme.value);
    icon.value = theme.value === 'dark' ? lightIcon : darkIcon;

    document.body.classList.add('theme-ready');
  });

  return { theme, icon, toggleTheme };
}