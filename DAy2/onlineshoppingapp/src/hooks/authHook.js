export default function useAuth() {
  if (sessionStorage["isAuthenticated"]) return true;
}
