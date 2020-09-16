<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('WP_CACHE', true);
define( 'WPCACHEHOME', 'C:\xampp\htdocs\galaxy\wp-content\plugins\wp-super-cache/' );
define( 'DB_NAME', 'galaxy' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'jXxp0{}V3sri,(4t,EBEy33:Qv{x6{8G18V1--T,FVo~N-y+EwDLup>{rQa~j]6N' );
define( 'SECURE_AUTH_KEY',  '=|67n#t,KD[9h/.I<(LNV$vFOw&A=8Tl-XDZY9$[w TX[zI9x#/h1r_w0>iH[)I*' );
define( 'LOGGED_IN_KEY',    'a:^j 5%(sy?i?qgD Yp2G1y!K^_KZ ;0]GXv[y~qGfHOR1Armk%}w:lx,5loxHq|' );
define( 'NONCE_KEY',        '>{/s|h%qAO=<`]8g&3.K]b6F5uy{=svNgQcI?HThxAD/DL1cXuZ?$tnz*Sb@Sb,{' );
define( 'AUTH_SALT',        '$&?!aD{,47ywU^e4{o7c8J2*Sk)au_>p>S)-$RI*:W@-a;H+5BT>(;&fC)^wn|t~' );
define( 'SECURE_AUTH_SALT', 'bNjjg)R]R#W<_PT#;vbv)gd7(O`f51]7hmUKS=GTj[sO{`1MJME;wC&=`,?,x=rw' );
define( 'LOGGED_IN_SALT',   'kTkK,;n)$3](Km0{!M*spRueV7Wg61{U-Ri~iI[3ujw$N5:mb@9<H]wQ$_n5D&/j' );
define( 'NONCE_SALT',       '@Yi+~% 9%qu&qrP4B-^Bi(>s]b*$cz(FVO6V>3:rS8x|5al3?jo>>fF2vT?AMYF+' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
