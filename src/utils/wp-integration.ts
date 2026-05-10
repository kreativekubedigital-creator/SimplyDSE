/**
 * SimplyDSE WordPress Integration Utility
 * This file handles asset path resolution for WordPress compatibility.
 */

// If window.simplydse_config is defined (via wp_localize_script), use that path.
// Otherwise, default to the root for local development.
const getAssetPath = (path: string) => {
  if (path.startsWith('http') || path.startsWith('https') || path.startsWith('data:')) {
    return path;
  }
  const base = (window as any).simplydse_config?.asset_url || '';
  const cleanPath = path.startsWith('/') ? path : '/' + path;
  return `${base}${cleanPath}`;
};

export default getAssetPath;
