import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get('title') || 'CybitSolutions';
  const subtitle = searchParams.get('subtitle') || 'Mission-Grade IT for Government & Enterprise';

  return new ImageResponse(
    (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '60px 80px',
        background: 'linear-gradient(135deg, #0A1628 0%, #0F1F38 50%, #1B2B42 100%)',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}>
        {/* Logo area */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
          <div style={{
            fontSize: '28px',
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '-0.5px',
          }}>
            CybitSolutions
          </div>
          <div style={{
            marginLeft: '16px',
            padding: '4px 12px',
            background: 'rgba(37, 99, 235, 0.2)',
            borderRadius: '20px',
            fontSize: '12px',
            color: '#60A5FA',
            fontWeight: 600,
          }}>
            GOVCON IT
          </div>
        </div>

        {/* Title */}
        <div style={{
          fontSize: '52px',
          fontWeight: 800,
          color: '#FFFFFF',
          lineHeight: 1.1,
          marginBottom: '16px',
          maxWidth: '900px',
        }}>
          {title}
        </div>

        {/* Subtitle */}
        <div style={{
          fontSize: '24px',
          color: 'rgba(255, 255, 255, 0.6)',
          lineHeight: 1.4,
          maxWidth: '700px',
        }}>
          {subtitle}
        </div>

        {/* Bottom accent */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #2563EB, #F59E0B)',
        }} />

        {/* URL */}
        <div style={{
          position: 'absolute',
          bottom: '24px',
          right: '60px',
          fontSize: '14px',
          color: 'rgba(255, 255, 255, 0.4)',
        }}>
          cybitsolutions.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
