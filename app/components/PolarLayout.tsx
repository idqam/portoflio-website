import React, { useMemo } from 'react';

export interface PolarItemParams {
    x: number;
    y: number;
    angle: number;
    startAngle: number;
    endAngle: number;
    index: number;
}

interface PolarLayoutProps<T> {
    items: T[];
    renderItem: (item: T, params: PolarItemParams) => React.ReactNode;

    radius: number;
    width?: number;
    height?: number;

    getWeight?: (item: T) => number;
    offsetAngle?: number;
    className?: string;
    cx?: number;
    cy?: number;
}

export function PolarLayout<T>({
    items,
    renderItem,
    radius,
    width = 600,
    height = 600,
    getWeight = () => 1,
    offsetAngle = -Math.PI / 2,
    className = "",
    cx: propCx,
    cy: propCy
}: PolarLayoutProps<T>) {

    const layoutItems = useMemo(() => {
        const weights = items.map(getWeight);
        const totalWeight = weights.reduce((a, b) => a + b, 0);

        const cx = propCx ?? width / 2;
        const cy = propCy ?? height / 2;

        if (totalWeight === 0) {
            return items.map((_, i) => ({
                x: cx, y: cy, angle: 0, startAngle: 0, endAngle: 0, index: i
            }));
        }

        let currentAngle = offsetAngle;

        return items.map((_, index) => {
            const weight = weights[index];
            const sectorAngle = (weight / totalWeight) * 2 * Math.PI;

            const startAngle = currentAngle;
            const endAngle = currentAngle + sectorAngle;
            const midAngle = startAngle + (sectorAngle / 2);

            const x = cx + radius * Math.cos(midAngle);
            const y = cy + radius * Math.sin(midAngle);

            currentAngle += sectorAngle;

            return {
                x,
                y,
                angle: midAngle,
                startAngle,
                endAngle,
                index
            };
        });
    }, [items, radius, width, height, getWeight, offsetAngle, propCx, propCy]);

    return (
        <div
            className={`relative ${className}`}
            style={{ width, height }}
        >
            {layoutItems.map((params, i) => (
                <React.Fragment key={i}>
                    {renderItem(items[i], params)}
                </React.Fragment>
            ))}
        </div>
    );
}
