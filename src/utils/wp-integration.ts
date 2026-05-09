/**
 * SimplyDSE WordPress Integration Utility
 * This file handles asset path resolution for WordPress compatibility.
 */

// If window.simplydse_config is defined (via wp_localize_script), use that path.
// Otherwise, default to the root for local development.
const getAssetPath = (path: string) => {
  const base = (window as any).simplydse_config?.asset_url || '';
  return `${base}${path.startsWith('/') ? path : '/' + path}`;
};

export default getAssetPath;
